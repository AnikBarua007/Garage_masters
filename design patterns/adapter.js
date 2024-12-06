        // Adapter Design Pattern
        
        // 1. Target Interface
        class PriceConverter {
            convertToUsd(amountInBdt) {
              throw new Error('This method should be overridden by the adapter');
            }
          }
          
          // 2. Adaptee - External Service (Using a hardcoded exchange rate)
          class ExternalCurrencyService {
            getExchangeRate() {
              // Hardcoded exchange rate for 1 BDT = 0.0084 USD (Example)
              return 0.0084;
            }
          }
          
          // 3. Adapter
          class CurrencyAdapter extends PriceConverter {
            constructor(externalService) {
              super();
              this.externalService = externalService;
            }
          
            convertToUsd(amountInBdt) {
              const exchangeRate = this.externalService.getExchangeRate();
              return amountInBdt * exchangeRate;
            }
          }
          
          // 4. Create an instance of the external service (Adaptee)
          const externalService = new ExternalCurrencyService();
          
          // 5. Create an instance of the adapter (CurrencyAdapter)
          const currencyAdapter = new CurrencyAdapter(externalService);