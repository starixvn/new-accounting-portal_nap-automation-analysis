using AutomationAnalysis.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace AutomationAnalysisUnitTests.ExtensionsUnitTests
{
    public class StringExtensionsUnitTest
    {
        [Fact]
        public void IsContains_ValidInput_ReturnTrue()
        {
            var temp = "searched";

            var result = temp.IsContains("sear");

            Assert.True(result);
        }

        [Fact]
        public void IsContains_EmptyInput_ReturnFalse()
        {
            var temp = string.Empty;

            var result = temp.IsContains("sear");

            Assert.False(result);
        }

        [Fact]
        public void IsContains_NullInput_ReturnFalse()
        {
            string temp = null;

            var result = temp.IsContains("sear");

            Assert.False(result);
        }
    }
}