import * as Yup from 'yup'

export default function configurarValidaciones(){
    Yup.addMethod(Yup.string,'primeraLetraMayuscula', function(){
        return this.test('primera-letra-mayuscula','La primera letra debe ser mayuscula',
        function (valor){
            if(valor&&valor.length>0){
                const primeraletra = valor.substring(0,1);
                valor = valor.toLocaleUpperCase();
                return primeraletra === primeraletra.toLocaleUpperCase();
            }
            return true;
        })
    })
}