async function getExchangeTokens() {
    try {
      const response = await fetch('https://api3.loopring.io/api/v3/exchange/tokens', {
        method: 'GET',
        headers: {
          'Connection': 'keep-alive',
          'Accept': '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'zh,en;q=0.9',
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data;
      } else {
        console.error(`Error: ${response.status} ${response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  }
  