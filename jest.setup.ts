import { setupServer } from "msw/node";
import { handlers } from "./src/mocks/handler";
import "@testing-library/jest-dom/extend-expect";

export const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
//aftereach로 서버를 꺼버리면 다른 테스트에 영향을 줌
