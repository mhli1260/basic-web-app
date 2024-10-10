import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrew id description', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Your Andrew ID is mhli."
          ));
    });

    // test('should return name ', () => {
    //     const query = "what is your name";
    //     const response: string = QueryProcessor(query);
    //     expect(response).toBe((
    //         "Mia"
    //       ));
    // });
    test('should return sum of two numbers', () => {
        expect(QueryProcessor("what is 1 plus 2?")).toBe("3");
    });
    test('should return product of two numbers', () => {
        expect(QueryProcessor("what is 1 multiplied by 2?")).toBe("2");
    });
    test('should return largest number', () => {
        const query = "Which of the following numbers is the largest: 1, 2, 3?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("3");
    });
});