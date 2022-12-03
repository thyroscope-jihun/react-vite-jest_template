import { rest } from "msw";
import axios from "axios";

const BASE_URL = process.env.VITE_API_BASE_URL;

axios.defaults.baseURL = BASE_URL;

export const handlers = [
  rest.get(`${BASE_URL}/test`, (req, res, ctx) => {
    const data = [
      {
        id: 2,
        email: "뽝뽝@thyroscope.com",
        name: "테스트남",
        cdate: "2022-11-15T04:45:31.000+00:00",
      },
      {
        id: 3,
        email: "taktak@thyroscope.com",
        name: "테스트윤",
        cdate: "2022-11-15T05:16:16.000+00:00",
      },
    ];
    return res(
      ctx.status(200),
      ctx.json(data),
      ctx.set("Content-Type", "application/json")
    );
  }),
];
