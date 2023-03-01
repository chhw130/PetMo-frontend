import { rest } from "msw";
import { BASE_URL } from "../constants";
import uuid from "react-uuid";

export const imageHandler = [
  rest.post(`${BASE_URL}/image/upload`, async (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        createImages: [
          {
            id: uuid(),
            imageFilePath:
              "https://w.namu.la/s/33f2ba37cdd6ee00c42561185b80e21cb9df2b5ffa7f3d0a2856fc09ccc808d08747a7c97e68ad8275844e0dd47944bdc3ee1a1d94008526dd25e3e7847833324d65e000647005fcc55cc1bb92c6060d4ed689cacb2b22d04775c3e0f37db3c3a823f06b3959485ceb8c39756630d786",
          },
        ],
      })
    );
  }),

  rest.get(`${BASE_URL}/image/1`, async (req, res, ctx) => {
    return res(
      ctx.json({
        imagePath:
          "https://w.namu.la/s/33f2ba37cdd6ee00c42561185b80e21cb9df2b5ffa7f3d0a2856fc09ccc808d08747a7c97e68ad8275844e0dd47944bdc3ee1a1d94008526dd25e3e7847833324d65e000647005fcc55cc1bb92c6060d4ed689cacb2b22d04775c3e0f37db3c3a823f06b3959485ceb8c39756630d786",
      })
    );
  }),

  rest.get(`${BASE_URL}/image/2`, async (req, res, ctx) => {
    return res(
      ctx.json({
        imagePath:
          "https://w.namu.la/s/e1a04b9375e52e68bdf14d3af883347c7380d2f3565f49343d876a1b32d9ea47225d85a6dce43746c1dd997ef1d54b2843619b615fddccc53d903e56037da422ab25e93c1b2b5adfa8c5049c7a4e11642de43167320103dad7c31c266502c8de620e63254eaa52e499437f96ed79ec79",
      })
    );
  }),
];
