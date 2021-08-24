using System;
using System.IO;

namespace AutomationAnalysis.Utils
{
    public static class FileUtil
    {
        public static FileInfo GetFileInfo(string directory, string file)
        {
            var rootDir = GetRootDirectory().FullName;
            return new FileInfo(Path.Combine(rootDir, directory, file));
        }

        public static DirectoryInfo GetRootDirectory()
        {
            var currentDir = AppDomain.CurrentDomain.BaseDirectory;
            while (currentDir != null && !currentDir.EndsWith("bin"))
            {
                currentDir = Directory.GetParent(currentDir)?.FullName.TrimEnd('\\');
            }

            return new DirectoryInfo(currentDir ?? string.Empty).Parent;
        }
    }
}