const Excel = require('exceljs');

export class ExcelReader{

    async lectExcel(filepath:string,sheetname:string,celda:string): Promise<string> {
        
        var workbook = await new Excel.Workbook();
        await workbook.xlsx.readFile(filepath);
        var worksheet = await workbook.getWorksheet(sheetname);           
        
        var cellValue = await worksheet.getCell(celda).text
        return  cellValue
     
    }
    
}
