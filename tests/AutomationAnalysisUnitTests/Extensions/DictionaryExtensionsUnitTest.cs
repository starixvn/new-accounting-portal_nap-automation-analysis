using AutomationAnalysis.Extensions;
using System.Collections.Generic;
using Xunit;

namespace AutomationAnalysisUnitTests.Extensions
{
    public class DictionaryExtensionsUnitTest
    {
        [Theory]
        [InlineData("key1", "value1")]
        [InlineData("key2", "defaultValue")]
        public void GetValueWithDefaultValue_ReturnExpectedValue(string key, string expectedValue)
        {
            // Arrange
            var dictionary = new Dictionary<string, string>
            {
                { "key1", "value1" }
            };

            // Act
            var value = dictionary.GetValue(key, "defaultValue");

            // Assert
            Assert.Equal(value, expectedValue);
        }

        [Theory]
        [InlineData("key1", "value1")]
        [InlineData("key2", "value2")]
        public void GetValueWithoutDefaultValue_ReturnDictionaryValue(string key, string expectedValue)
        {
            // Arrange
            var dictionary = new Dictionary<string, string>
            {
                { "key1", "value1" },
                { "key2", "value2" }
            };

            // Act
            var value = dictionary.GetValue(key);

            // Assert
            Assert.Equal(value, expectedValue);
        }
    }
}