using AutomationAnalysis.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace AutomationAnalysisUnitTests.ExtensionsUnitTests
{
    public class DictionaryExtensionsUnitTest
    {
        [Fact]
        public void GetValue_ValidKey_ReturnValue()
        {
            GetValueTestHelpers<string, string>("key", "value");
            GetValueTestHelpers<int, string>(1, "value");
            GetValueTestHelpers<object, object>(1, "value");
            GetValueTestHelpers<DateTime, object>(DateTime.Now, "value");
        }

        [Fact]
        public void GetValue_InValidKey_ReturnDefaultValue()
        {
            var dic = AddDictionaryOneItem<string, string>("A", "featureA");

            var result = dic.GetValue("B", "featureB");

            Assert.Equal("featureB", result);
        }

        public void GetValueTestHelpers<TKey, TValue>(TKey key, TValue value)
        {
            var dic = AddDictionaryOneItem<TKey, TValue>(key, value);

            var result = dic.GetValue(key);

            Assert.Equal(value, result);
        }

        private Dictionary<TKey, TValue> AddDictionaryOneItem<TKey, TValue>(TKey key, TValue value)
        {
            var dic = new Dictionary<TKey, TValue>();
            dic.Add(key, value);

            return dic;
        }
    }
}