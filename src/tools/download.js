export function downloadFile(downloadUrl, fileName){
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.target = '_blank';
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild();
}