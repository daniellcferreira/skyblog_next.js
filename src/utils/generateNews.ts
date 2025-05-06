import { News } from "@/interfaces/news";
import { faker } from "@faker-js/faker";
import { getRandomSubcategories } from "./dataCategories";
import axios from "axios";

export async function generateNews(length: number) {
  const OPENAI_API_BASE_URL = "http://localhost:3000/api/openAiRequests";
  const news: News[] = [];

  for (let i = 0; i < length; i++) {
    const randomWord = faker.word.verb();
    const category = getRandomSubcategories();

    const titleResponse = await axios.post(OPENAI_API_BASE_URL, {
      text: `Create a title with the category "${category.subcategory}" for a blog text. Unique keyword: ${randomWord}, respond with text only`
    });
    const title = titleResponse.data;

    const previewResponse = await axios.post(OPENAI_API_BASE_URL, {
      text: `Create a preview for a blog text with the category "${title}" Unique keyword: ${randomWord}, respond with text only`
    });

    const contentResponse = await axios.post(OPENAI_API_BASE_URL, {
      text: `Create a four-paragraph text based on this title "${title}" Unique keyword: ${randomWord}, respond with text only`
    });

  }

}
