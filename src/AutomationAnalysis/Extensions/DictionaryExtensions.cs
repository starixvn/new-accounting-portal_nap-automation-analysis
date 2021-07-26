namespace AutomationAnalysis.Extensions
{
    using System;
    using System.Collections.Generic;

    public static class DictionaryExtensions
    {
        public static TValue GetValue<TKey, TValue>(this Dictionary<TKey, TValue> dictionary, TKey key, TValue defaultValue)
        {
            return dictionary.ContainsKey(key) ? dictionary[key] : defaultValue;
        }

        public static TValue GetValue<TKey, TValue>(this Dictionary<TKey, TValue> dictionary, TKey key)
        {
            return dictionary[key];
        }

        public static Dictionary<string, string> CloneCaseInSensitive(this Dictionary<string, string> dictionary)
        {
            var clonedDictionary = new Dictionary<string, string>(StringComparer.InvariantCultureIgnoreCase);

            foreach (var key in dictionary.Keys)
            {
                var lowerCaseKey = key.ToLower();
                if (!clonedDictionary.ContainsKey(lowerCaseKey))
                {
                    clonedDictionary.Add(lowerCaseKey, dictionary[key]);
                }
            }

            return clonedDictionary;
        }
    }
}