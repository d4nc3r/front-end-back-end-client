export interface ParkViewModel {
  numberOfParks: number;
  list: ParkViewModelListItem[]
}

export interface ParkViewModelListItem {
  id: string;
  reservation: string;
  acreage: string;
  notes: string;
}

export interface ParkCreate {
  reservation: string;
  acreage?: string;
  notes?: string;
}
