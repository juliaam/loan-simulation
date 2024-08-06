import { api } from "../config/api";
import { ISimulationFormSchema } from "../components/Simulation/SimulationForm/SimulationForm";

interface ILoanResult {
  outstandingBalance: string;
  interest: string;
  adjustedOutstandingBalance: string;
  installmentAmount: string;
  dueDate: string;
}

const LoanService = {
  async simulate(
    data: ISimulationFormSchema
  ): Promise<ILoanResult | undefined> {
    try {
      const res = await api.post(`loan/simulate`, data);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export { LoanService };
