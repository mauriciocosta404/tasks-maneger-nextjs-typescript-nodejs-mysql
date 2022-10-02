import { AdminRepository } from "../../repositories/implements/AdminRepository";

class GetAdminsUseCase {
    constructor(private adminRepository: AdminRepository) { }

    async execute() {
        const allAdmins = await this.adminRepository.getAdmin();

        return allAdmins;
    }
}
export { GetAdminsUseCase };