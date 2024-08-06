import { api } from "../config/api";
import { ISimulationFormSchema } from "../components/Simulation/SimulationForm/SimulationForm";

interface parcel {
  outStadingBalance: string;
  interest: string;
  adjustedOutstandingBalance: string;
  installmentAmount: string;
  dueDate: string;
}
export interface ISimulationResult {
  parcels: parcel[];
  totalPerCent: number;
  totalInterest: number;
  monthsToQuit: string;
  totalWithInterest: number;
}

const LoanService = {
  async simulate(
    data: ISimulationFormSchema
  ): Promise<ISimulationResult | undefined> {
    try {
      const res = await api.post(`loan/simulate`, data);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },
  async create(
    data: ISimulationFormSchema
  ): Promise<ISimulationResult | undefined> {
    try {
      const res = await api.post(`loan/`, data);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export { LoanService };
