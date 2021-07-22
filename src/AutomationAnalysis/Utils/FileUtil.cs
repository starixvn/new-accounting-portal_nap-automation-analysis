using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace AutomationAnalysis.Utils
{
    public class FileUtil
    {
        protected FileUtil()
        {
        }

        public static DirectoryInfo GetRootDirectory()
        {
            var currentDir = AppDomain.CurrentDomain.BaseDirectory;
            while (!currentDir.EndsWith("bin"))
            {
                currentDir = Directory.GetParent(currentDir).FullName.TrimEnd('\\');
            }

            return new DirectoryInfo(currentDir).Parent;
        }

        public static FileInfo GetFileInfo(string file)
        {
            return new FileInfo(Path.Combine(GetRootDirectory().FullName, file));
        }
    }
}