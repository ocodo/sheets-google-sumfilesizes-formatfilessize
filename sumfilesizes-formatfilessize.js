// Usage: =FORMATFILESIZE(SUMFILESIZES(A1:A4), "GB")
// "GB" is the target format, can be "B", "KB", "MB", "GB", "TB" or "PB"
// 

function SUMFILESIZES(fileSizes) {
  if (!fileSizes || fileSizes.length === 0) {
    return 'Error: No range provided';
  }

  let totalSizeInBytes = 0;

  for (let i = 0; i < fileSizes.length; i++) {
    let size = fileSizes[i].toString().trim();
    let value = parseFloat(size);
    let unit = size.replace(/[0-9.]/g, '').trim();

    let multiplier;
    switch (unit) {
      case 'PB':
        multiplier = Math.pow(1024, 5); // 1 PB = 1024^5 bytes
        break;
      case 'TB':
        multiplier = Math.pow(1024, 4); // 1 TB = 1024^4 bytes
        break;
      case 'GB':
        multiplier = Math.pow(1024, 3); // 1 GB = 1024^3 bytes
        break;
      case 'MB':
        multiplier = Math.pow(1024, 2); // 1 MB = 1024^2 bytes
        break;
      case 'KB':
        multiplier = 1024; // 1 KB = 1024 bytes
        break;
      default: // Everything else is considered bytes
        multiplier = 1; // 1 B = 1 byte
    }

    totalSizeInBytes += value * multiplier;
  }

  return totalSizeInBytes;
}

function FORMATFILESIZE(sizeInBytes, targetUnit) {
  let divisor;
  switch (targetUnit) {
    case 'PB':
      divisor = Math.pow(1024, 5); // 1 PB = 1024^5 bytes
      break;
    case 'TB':
      divisor = Math.pow(1024, 4); // 1 TB = 1024^4 bytes
      break;
    case 'GB':
      divisor = Math.pow(1024, 3); // 1 GB = 1024^3 bytes
      break;
    case 'MB':
      divisor = Math.pow(1024, 2); // 1 MB = 1024^2 bytes
      break;
    case 'KB':
      divisor = 1024; // 1 KB = 1024 bytes
      break;
    case 'B':
      divisor = 1; // 1 B = 1 byte
      break;
    default:
      return 'Error: Invalid target unit';
  }

  return (sizeInBytes / divisor).toFixed(2) + ' ' + targetUnit;
}