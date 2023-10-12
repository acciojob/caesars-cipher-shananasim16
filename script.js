function  rot13(){
            const inputText = document.getElementById("code").value
            const decodedText = decodeROT13(inputText);
            document.getElementById('result').innerText = '"'+decodedText'"';
        }

        function decodeROT13(encodedText) {
          return  encodedText.replace(/[A-Z]/g, (char) => {
                return String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65);
            });
        }