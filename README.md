# Google Sheets File Size Sum and Format Custom Functions

This repository contains custom Google Sheets functions to sum and format file sizes with various units (B, KB, MB, GB, TB, PB). These functions are implemented using Google Apps Script.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Custom Functions](#custom-functions)
  - [SUMFILESIZES](#sumfilesizes)
  - [FORMATFILESIZE](#formatfilesize)
- [Examples](#examples)
- [License](#license)

## Introduction

Google Sheets does not have built-in functions to handle file sizes with different units (B, KB, MB, GB, TB, PB). This project provides custom functions to sum file sizes and format the result in a human-readable format.

## Installation

1. **Open Google Sheets**: Open the Google Sheets document where you want to use the custom functions.
2. **Open Apps Script**:
   - Click on `Extensions` > `Apps Script`.
3. **Create New Script**:
   - Delete any existing code in the script editor.
   - Copy and paste the code from `sumfilesizes-formatfilessize.js` in this repository into the script editor.
4. **Save the Script**:
   - Click the disk icon or press `Ctrl + S` (Windows) or `Cmd + S` (Mac).
   - Name your project (e.g., `FileSizeFunctions`).
5. **Close the Script Editor**: Close the Apps Script editor.

## Usage

### Custom Functions

#### SUMFILESIZES

**Description**: Sums a list of file sizes in different units (B, KB, MB, GB, TB, PB) and returns the total size in bytes. Numbers supplied without a known suffix are treated as byte values.

**Syntax**:
```excel
=SUMFILESIZES(fileSizes)
```

**Parameters**:
- `fileSizes`: A range of cells containing file sizes with units (e.g., `A1:A4`).

**Returns**:
- The total size in bytes.

**Example**:
```excel
=SUMFILESIZES(A1:A4)
```

#### FORMATFILESIZE

**Description**: Formats a file size in bytes to a specified unit (B, KB, MB, GB, TB, PB).

**Syntax**:
```excel
=FORMATFILESIZE(sizeInBytes, targetUnit)
```

**Parameters**:
- `sizeInBytes`: The file size in bytes.
- `targetUnit`: The desired unit for formatting. Usable suffixes are:
  - `"B"` (Bytes)
  - `"KB"` (Kilobytes)
  - `"MB"` (Megabytes)
  - `"GB"` (Gigabytes)
  - `"TB"` (Terabytes)
  - `"PB"` (Petabytes)

**Returns**:
- The formatted file size with the specified unit.

**Example**:
```excel
=FORMATFILESIZE(SUMFILESIZES(A1:A4), "GB")
```

### Examples

Assume the following file sizes are in cells `A1:A6`:
- 669 MB
- 7.9 GB
- 9.0 GB
- 6.6 GB
- 274 MB
- 512 KB

To get the total size in GB:
```excel
=FORMATFILESIZE(SUMFILESIZES(A1:A6), "GB")
```

This will return:
```
23.50 GB
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
