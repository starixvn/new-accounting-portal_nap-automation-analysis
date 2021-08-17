using AutomationAnalysis.Extensions;
using Xunit;

namespace AutomationAnalysisUnitTests.Extensions
{
    public class StringExtensionsUnitTest
    {
        [Theory]
        [InlineData("sear")]
        [InlineData("")]
        [InlineData(null)]
        public void IsContains_ValidInput_ReturnTrue(string searchString)
        {
            var temp = "searched";

            var result = temp.IsContains(searchString);

            Assert.True(result);
        }

        [Theory]
        [InlineData("")]
        [InlineData(null)]
        public void IsContains_NullOrEmptyInput_ReturnFalse(string toBeSearchedString)
        {
            var result = toBeSearchedString.IsContains("sear");

            Assert.False(result);
        }
    }
}