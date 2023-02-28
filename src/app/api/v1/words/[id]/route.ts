import {cookies} from "next/headers";
import {NextResponse} from "next/server";

export async function GET(request: Request, {params}: any) {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  const language = cookieStore.get('language');
  const response = NextResponse.next();
  response.cookies.set('language', `${language}`);
  
  const wordId = params.id;
  
  const responseData = {
    data: [
      {
        "id": "strategy",
        "en": "strategy",
        "phrase": "",
        "description": "",
        "sentences": [
          "Must have a {{strategy}} for it."
        ],
        "questions": [
          {
            "sentence": "Must have a {{strategy}} for it.",
            "suggestion": ["strategy", "plan", "work"]
          }
        ],
        "status": 0,
        "field": ["work"],
        "type": "noun",
        "synonyms": [],
        "feedbacks": [
          {
            "id": "f1",
            "title": "",
            "content": ""
          }
        ],
        "image": "",
        "url": ""
      }
    ]
    
  }
  return new Response(JSON.stringify(responseData))
}
