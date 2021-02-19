import { InstallmentModel } from "../models/installment.model";

export interface IInstallmentRepository {
    save(installment: InstallmentModel): Promise<InstallmentModel>
    findOne(installmentId: string): Promise<InstallmentModel>
    update(installment: Partial<InstallmentModel>): Promise<InstallmentModel>
}