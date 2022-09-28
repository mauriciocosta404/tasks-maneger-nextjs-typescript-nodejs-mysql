import { AdminRepository } from "../../repositories/implements/AdminRepository";
import { AuthenticateAdminController } from "./AuthenticateAdminController";
import { AuthenticateAdminUseCase } from "./AuthenticateAdminUseCase";

const adminRepository = AdminRepository.getINSTANCE();
const authenticateAdminUseCase = new AuthenticateAdminUseCase(adminRepository);
const authenticateAdminController = new AuthenticateAdminController(authenticateAdminUseCase);

export { authenticateAdminController };