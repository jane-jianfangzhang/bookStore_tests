# Book store testing
This is e2e tests for the book store online application.  
**Framework:** Cypress v14.0.0  
**Test report generator:** Mochawesome

## Running test locally
1. **Clone the repository** 
```bash
git clone https://github.com/jane-jianfangzhang/bookStore_tests.git  
```
2. **Install all the dependencies**
```bash
npm install
```
3. **Run the test locally**  
Now you can run the test locally **without generate report**:  
```bash
npx cypress run
```
4. Run **with Mochawesome reporter** by running: 
 ```bash
npx cypress run --reporter mochawesome --reporter-options reportDir=cypress/report,overwrite=false,html=false,json=true
```  
## Generate HTML report
If you ran the cypress tests with the Mochawesome reporter, you need to merge all the individual json reports into one json file:
```bash
npx mochawesome-merge cypress/report/*.json > cypress/report/merged-report.json
```  
After merging successfully, you should be able to generate an HTML report from the merged JSON:
```bash
npx mochawesome-report-generator cypress/report/merged-report.json --reportDir cypress/report --reportFilename book-store-testing-report 
```
You should be able to view the testing report in: cypress/report/**book-store-testing-report.html**.

## Folder Structure  
```
.
└── .github/workflows    #ci yml file
└── cypress
    ├── e2e              # Test files
    ├── fixtures         # Testing data
    ├── report           # HTML and JSON testing reports
    └── support
        └── pageObjects  # Page object files
```
## Note: Accessing test reports in Github Workflow  

I currently have tests runing in github workflow ([link](https://github.com/jane-jianfangzhang/bookStore_tests/actions)), you can click on any workflow run that has completed:  
1. Under the Artifacts section, you should see an artifact named cypress-html-report. Example: [cypress-html-report](https://github.com/jane-jianfangzhang/bookStore_tests/actions/runs/12965576067) 
2. Click on the Download button next to the cypress-html-report (Make sure you have logged into github first).
3. After downloading, unzip the folder. 
4. Open the HTML report by navigating to cypress-html-report/book-store-testing-report.html.  
