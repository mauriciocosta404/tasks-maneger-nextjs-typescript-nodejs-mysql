import { Response, Request } from "express";
import { GetAdminsUseCase } from "./GetAdminsUseCase";

class GetAdminsController {
    constructor(private getAdminsUseCase: GetAdminsUseCase) { }

    async handle(request: Request, response: Response) {

        try {
            const allAdmins = await this.getAdminsUseCase.execute();

            return response.json(allAdmins);
        } catch (error) {
            return response.status(400).json({ message: error.message || "unexpected" });
        }
    }
}
export { GetAdminsController }