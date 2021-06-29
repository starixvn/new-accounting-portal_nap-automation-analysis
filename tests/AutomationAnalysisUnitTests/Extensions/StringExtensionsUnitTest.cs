using AutomationAnalysis.Extensions;
using Xunit;

namespace AutomationAnalysisUnitTests.Extensions
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
            var result = ((string)null).IsContains("sear");

            Assert.False(result);
        }
    }
}