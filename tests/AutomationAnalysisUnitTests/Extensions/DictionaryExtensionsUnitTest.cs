using AutomationAnalysis.Extensions;
using System;
using System.Collections.Generic;
using Xunit;

namespace AutomationAnalysisUnitTests.Extensions
{
    public class DictionaryExtensionsUnitTest
    {
        [Fact]
        public void GetValue_ValidKey_ReturnValue()
        {
            GetValueTestHelpers("key", "value");
            GetValueTestHelpers(1, "value");
            GetValueTestHelpers<object, object>(1, "value");
            GetValueTestHelpers<DateTime, object>(DateTime.Now, "value");
        }

        [Fact]
        public void GetValue_InValidKey_ReturnDefaultValue()
        {
            var dic = AddDictionaryOneItem("A", "featureA");

            var result = dic.GetValue("B", "featureB");

            Assert.Equal("featureB", result);
        }

        private void GetValueTestHelpers<TKey, TValue>(TKey key, TValue value)
        {
            var dic = AddDictionaryOneItem(key, value);

            var result = dic.GetValue(key);

            Assert.Equal(value, result);
        }

        private Dictionary<TKey, TValue> AddDictionaryOneItem<TKey, TValue>(TKey key, TValue value)
        {
            var dic = new Dictionary<TKey, TValue>
            {
                { key, value }
            };

            return dic;
        }
    }
}