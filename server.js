document.getElementById('submission').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;

    fetch('https://connect.mailerlite.com/api', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZGI5ZmQ2MGVkNWZmNTNiMjk5YTE1N2Y4MDM3NDY0YTcwNTcxNTI3ZjA5MzU4ZTFlMDc1NzI2OWI2ZWI4MDhkNDYzZDMyNjYwOWQ5ODVkNDUiLCJpYXQiOjE3MjA2OTg2MTcuMTU5MDgzLCJuYmYiOjE3MjA2OTg2MTcuMTU5MDg1LCJleHAiOjQ4NzYzNzIyMTcuMTU2MzM3LCJzdWIiOiIxMDI5MDA2Iiwic2NvcGVzIjpbXX0.rR5Ql0TDI4sPzQIJmxGMQRm8Hsy976r1hFX8jIBALVOBZbgToQbObFqiUvkbBlWpo3pf36pTWDiX54xZBTfwz81BSYWL4cfAV7jB-_OeHsfKVxfGIs46_1Pxv4XfNCgF0c_H7_JI5qkQaxfj6FlCf1mMh88gQxr3ivF0pL3OSkrk9mIrHGy_4fkQlEe56hb0lAEsGFacA7llRp9ktM8L-jEBSssLFMjcW1R7JlP3lR2tyO3q4vbrBvilF9CopOx4Zst5QP0S-QnEMORoybtrlTsugMUHNaBJWwNY83CWQmt8yTnDJk0-S2VzAyRIgd9VQuZn0DOHUIL_PcVI4k460K9ueXXin7kI7dii3jkxwbDJZLnOIyCziE285O6tbnVHt96mxQDmxmNDGYV3d1Pel10grF7SaP09VCLC4N6X0_fV6DiRi8yA-f1eI4bLZ3BCX9SbViclvb0WSYRI09Ohbhp3vCMLgxRAp1T9OZQU3HQSG4E58QUGJJO0P1wOQ3DJ9RsiZJaYiu8eJ_pCnDCluZOXX0KzQriSB-5kRp1FbipMrfAqa45aXBNYbVPGBQy_CnZuOd3irzEGiive438Z18jBWD5btzGwyQs25iFs16KPTMgrsJVYKKmbc82f7y5zPlD7fFk1L1IaIKdEK_RakAGL3_u8ytmTpZ7k80PVMO8'
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-MailerLite-ApiKey': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZGI5ZmQ2MGVkNWZmNTNiMjk5YTE1N2Y4MDM3NDY0YTcwNTcxNTI3ZjA5MzU4ZTFlMDc1NzI2OWI2ZWI4MDhkNDYzZDMyNjYwOWQ5ODVkNDUiLCJpYXQiOjE3MjA2OTg2MTcuMTU5MDgzLCJuYmYiOjE3MjA2OTg2MTcuMTU5MDg1LCJleHAiOjQ4NzYzNzIyMTcuMTU2MzM3LCJzdWIiOiIxMDI5MDA2Iiwic2NvcGVzIjpbXX0.rR5Ql0TDI4sPzQIJmxGMQRm8Hsy976r1hFX8jIBALVOBZbgToQbObFqiUvkbBlWpo3pf36pTWDiX54xZBTfwz81BSYWL4cfAV7jB-_OeHsfKVxfGIs46_1Pxv4XfNCgF0c_H7_JI5qkQaxfj6FlCf1mMh88gQxr3ivF0pL3OSkrk9mIrHGy_4fkQlEe56hb0lAEsGFacA7llRp9ktM8L-jEBSssLFMjcW1R7JlP3lR2tyO3q4vbrBvilF9CopOx4Zst5QP0S-QnEMORoybtrlTsugMUHNaBJWwNY83CWQmt8yTnDJk0-S2VzAyRIgd9VQuZn0DOHUIL_PcVI4k460K9ueXXin7kI7dii3jkxwbDJZLnOIyCziE285O6tbnVHt96mxQDmxmNDGYV3d1Pel10grF7SaP09VCLC4N6X0_fV6DiRi8yA-f1eI4bLZ3BCX9SbViclvb0WSYRI09Ohbhp3vCMLgxRAp1T9OZQU3HQSG4E58QUGJJO0P1wOQ3DJ9RsiZJaYiu8eJ_pCnDCluZOXX0KzQriSB-5kRp1FbipMrfAqa45aXBNYbVPGBQy_CnZuOd3irzEGiive438Z18jBWD5btzGwyQs25iFs16KPTMgrsJVYKKmbc82f7y5zPlD7fFk1L1IaIKdEK_RakAGL3_u8ytmTpZ7k80PVMO8'
        },
        body:{
            email: "test@example.com",
            resubscribe: true
        })
    })
        
    .then(response => {
        if (!response.ok) {
            return response.json().then(errorData => {
                throw new Error(`Network response was not ok: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`);
            });
        }
        return response.json();
    })
    .then(data => {
        alert('Subscription successful! You will be notified about the latest updates to Pulsey.');
    })
    .catch(error => {
        console.error('There was a problem with your submission:', error);
        alert('There was a problem with your submission: ' + error.message);
    });
});
