import { AdminRepository } from "../../repositories/implements/AdminRepository";
import { GetAdminsController } from "./GetAdminsController";
import { GetAdminsUseCase } from "./GetAdminsUseCase";

const adminRepository = new AdminRepository();
const getAdminsUseCase = new GetAdminsUseCase(adminRepository);
const getAdminsController = new GetAdminsController(getAdminsUseCase);

export { getAdminsController };