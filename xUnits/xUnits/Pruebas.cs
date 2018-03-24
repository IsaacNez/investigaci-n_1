using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace xUnits
{
    public class Pruebas
    {
 
        [Fact]
        public void esString()
        {
            string.IsNullOrEmpty("hola");
        }

        //al usar el tipo Fact, el método no puede tener argumentos y se espera que sea verdadero.
        [Fact]
        public void IsInt()
        {
            int a = 3;
            Assert.True(a is int);
        }
        //método que depende de sus datos para ser verdadero o no, el [InLineData(3,4)] es una entrada que será validada al ejecutar.
        [Theory]
        [InlineData(3,4)]//esta fallará
        [InlineData(7,7)]//prueba de éxito
        public void isEqual(int a, int b)
        {
            Assert.Equal(a,b);
        }

        //generando mockdata

    }
}
