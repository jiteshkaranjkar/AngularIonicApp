export class IStock {
  // StockId: number;
  // STOCKNAME: string;
  // DESCRIPTION: string;
  // NETPOSITION: number;
  // AVGRATE: number;
  // CLOSING: number;
  // MARKETRATE: number;
  // GAINLOSS: number;
  // MARKETVAL: number;
  // PERCENTCHANGE: number;
  // ISIN: string;
  // HOLDINGVALUE: number;

  
    constructor( public StockId: number,
        public STOCKNAME: string,
        public DESCRIPTION: string,
        public NETPOSITION: number,
        public AVGRATE: number,
        public CLOSING: number,
        public MARKETRATE: number,
        public  GAINLOSS: number,
        public  MARKETVAL: number,
        public PERCENTCHANGE: number,
        public ISIN: string,
        public HOLDINGVALUE: number
        ) {    }

    static fromJsonList(array): IStock[] {
        return array.map(IStock.fromJson);
    }

    static fromJson({StockId,  STOCKNAME,  DESCRIPTION,  NETPOSITION,  AVGRATE,  CLOSING,  MARKETRATE,  GAINLOSS,  MARKETVAL,  PERCENTCHANGE,  ISIN,  HOLDINGVALUE}):IStock {
        return new IStock( StockId,  STOCKNAME,  DESCRIPTION,  NETPOSITION,  AVGRATE,  CLOSING,  MARKETRATE,  GAINLOSS,  MARKETVAL,  PERCENTCHANGE,  ISIN,  HOLDINGVALUE);
    }


}












