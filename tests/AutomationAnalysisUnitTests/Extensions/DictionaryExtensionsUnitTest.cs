using AutomationAnalysis.Extensions;
using System;
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
            var actual = dictionary.GetValue(key, "defaultValue");

            // Assert
            Assert.Equal(actual, expectedValue);
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
            var actual = dictionary.GetValue(key);

            // Assert
            Assert.Equal(actual, expectedValue);
        }

        [Fact]
        public void CloneCaseInSensitive_Returns_DictionaryWithLowerKey()
        {
            // Arrange
            var dictionary = new Dictionary<string, string>
            {
                { "KEY1", "value1" },
                { "Key1", "value1" },
                { "key1", "value1" },
                { "key2", "value2" }
            };

            var expectedValue = new Dictionary<string, string>(StringComparer.InvariantCultureIgnoreCase)
            {
                {"key1", "value1"},
                {"key2", "value2"}
            };

            // Act
            var actual = dictionary.CloneCaseInSensitive();

            // Assert
            Assert.Equal(actual, expectedValue);
        }
    }
}