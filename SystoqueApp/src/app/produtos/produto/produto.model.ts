export interface IProduto {
    cb: string;
    nomeProduto: string;
    valorVenda: number;
    qtdProd: number;
    qtdMinProd: number;
    perecivel: boolean;
    dataValidade?: Date;
    lote?: string;
    prazoGarantia?: string;
}
