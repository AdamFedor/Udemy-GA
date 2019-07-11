// Pseudocode
// ----------
// 1. Two text files are identified and opened to compare.
// 2. The outcome of the merge the top 10 words that occur in both files.
// 3. The new file will be the same format as the imported files sorted by number of occurances.
// Changed the pseudocode (not alphabetical, export of all matches)

// Sort Pseudocode
// ---------------
// IDEA: Start with array.sort(), then push to more efficient sorting algorithm - recursive and maybe radix? Con is limited to arrays without converting.

// Merge and Export Pseudocode
// ---------------------------
// IDEA: Export via an object with a count - grabbing the top 10

// IDEA: push one to an object, if it exists increase the count by 1, otherwise = 1