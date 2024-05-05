## Breast Cancer Detection App Based On Machine Learning Models
Qiran Hu, SP24

### Project Vision  

The objective of this project is to analyze the significance of detecting whether a diagnosed breast cancer is malignant or not in this breast cancer dataset. Malignant breast cancers have the “potential to quickly spread to other areas of the body”, which requires special treatment methods like “chemotherapy or radiation therapy” (Narins, 2023). According to American Cancer society’s research, identifying malignancy “accurately and early” is crucial to prevent the spread of breast cancer and improve the chances of successful treatment (Rosenman, 2021). By detecting malignancy in the early stage, medical professionals can take “necessary measures” to ensure that patients receive the best possible care and treatment (Rosenman, 2021). For instance, one type of people who would find this predictive model particularly useful are oncologists; they are on the front lines of diagnosing and proposing treatment plans for patients with breast cancer. Early detection of malignancy is imperative in breast cancer treatment. A classifier that excels at identifying positive cases ensures that fewer cases of actual cancer are undetected and patients could receive “early-stage cancer treatments” that are generally more effective and less invasive (Narins, 2023). Missing a malignant case can lead to delayed treatment with “potentially severe consequences” (Rosenman, 2021). If a case is mistakenly identified as malignant, patients may undergo unnecessary and “potentially harmful treatments” that can “negatively impact” their quality of life (Rosenman, 2021). Therefore, “early and precise detection” of malignancy is important since it can “dramatically improve” the chances of successful treatment and increase survival rates (Narins, 2023). Moreover, this predictive model can also be beneficial in settings with limited access to specialized diagnostic tools or where expert radiologists are scarce. It could serve as a supplementary tool for healthcare providers in these areas, aiding them in making preliminary assessments or deciding when to refer patients to more specialized care. Thus, since oncologists would desire a classifier that was better at classifying the "positives" in our response variable, our primary research goal that we are pursuing is to build a predictive model that will effectively predict whether the diagnosed result is malignant or not for any incoming patients. The 5 explanatory variables we will be using to build this predictive model are `Mean Smoothness Level Above 0.1`, `radius_mean`, `texture_mean (g)`, `compactness_mean`, and `symmetry_mean`.  For our secondary research goal of analysis, we would like for our chosen model to also yield reliable interpretative insights about the nature of the relationship between the variables in the dataset. Our chosen model should also thoroughly describe the nature of the variables as well as the relationship between the variables that we would like to use in our model; these descriptive analytics techniques that we use should be interpreted in the context of our primary research goal. Oncologists, who play a key role in diagnosing and developing treatment plans for breast cancer patients, greatly benefit from predictive models that excel in identifying positive cases. Such models reduce the likelihood of undetected cancer cases, allowing for "timely treatment and minimizing the risks of severe consequences" associated with delayed treatment (Lee, 2020). Conversely, avoiding misidentification of malignancy prevents patients from undergoing unnecessary treatments that could detrimentally affect their quality of life. Hence, these models are not just tools for identifying potential malignancies; they are becoming integral in decision-making processes that determine the "most effective treatment plans" (Mia, 2018). By providing a higher degree of diagnostic accuracy, machine learning algorithms assist oncologists in identifying cancerous cases with greater precision, which is crucial for early-stage cancers, where the "visual cues in imaging might be minimal and easily overlooked" (Mia, 2018). As a result, early and accurate detection of breast cancer is extremely important and useful. Research conducted by the American Cancer Society highlights "the significance of timely identification of cancerous cells" to halt the progression of breast cancer (Rosenman, 2021). Early detection significantly boosts the effectiveness of various treatment approaches, thereby substantially increasing the chances of survival for patients. For example, if breast cancer is diagnosed while still localized, the likelihood of surviving for five years post-diagnosis reaches 99%. In contrast, this survival probability plunges to just 28% once the cancer has metastasized, underscoring the "severe consequences of late detection" (Jackson, 2023).

#### The Importance Of Early Dectection In Breast Cancer
[Comment_3]: <> (begin your text here)

| ![](https://github.com/Edward-H26/Project-Management_Qiran/blob/main/Final%20Papers/KMeans.png) | 
| :--: |
| <b>Figure 1.</b> Caption test. [Store image as an issue](https://github.com/OREL-group/Project-Management/issues/279) or in the local directory. |   

[Comment_4]: <> (Insert Figure with caption here)

#### Subheading     

[Comment_5]: <> (begin your text here)

__Paragraph heading__         

[Comment_6]: <> (begin your text two spaces after the last underscore in the previous line)


### Conclusion      

Through our analysis, we have come to the conclusion that our full model that includes radius mean, texture mean, compactness mean, symmetry mean, and mean smoothness level above 1, will be able to 
“effectively classify the response variable” diagnosis for new datasets (Narkhede, 2021). Our model yields interpretive insights into what variables most significantly impact whether or not a tumor is malignant, giving oncologists a better idea of what factors to consider with more weight when diagnosing a tumor. Our model has demonstrated remarkable accuracy, evidenced by a high Area Under the Curve score of 0.993, this metric is particularly important for oncologists as it reflects the model’s ability to “distinguish between benign and malignant” tumors effectively (Mia, 2018). An AUC score close to 1 indicates a high level of diagnostic precision, which is essential in a field where every minute counts and the stakes are “life altering” (Narkhede, 2021). Based on these factors and our explanatory variables being “standard statistics” when diagnosing tumors, we would recommend our model to oncologists who desire to effectively diagnose malignant tumors (Narkhede, 2021). For oncologists who are on the front lines of diagnosing and proposing treatment plans for patients with breast cancer, these models serve as “supplementary tools” that enhance the “diagnostic accuracy” of oncologists, helping them to make “informed decisions about when to escalate care” or refer patients to specialists (Lee, 2020). Thus, early detection is a critical component in the treatment strategy since it can dramatically alter the prognosis for patients. 

### References     

● Narins, E. (2023, September 19). Breast cancer awareness feature. Centers for Disease Control and Prevention.
https://www.cdc.gov/cancer/dcpc/resources/features/breastcancerawareness/index.htm

● Rosenman, M. (2021, April 28). Breast cancer: Breast cancer information & overview. Breast Cancer Information & Overview | American Cancer Society. https://www.cancer.org/cancer/types/breast-cancer.html

● Jackson, J. (2023, July 25). What is breast cancer?. Centers for Disease Control and Prevention. https://www.cdc.gov/cancer/breast/basic_info/what-is-breast-cancer.htm 

● Mia, L. (2018, February 17). Breast cancer-patient version. National Cancer Institute. https://www.cancer.gov/types/breast 

● Lee, C. (2020, April 18). Breast cancer. Cleveland Clinic. https://my.clevelandclinic.org/health/diseases/3986-breast-cancer 

● Narkhede, S. (2021, June 15). Understanding AUC - roc curve. Medium. https://towardsdatascience.com/understanding-auc-roc-curve-68b2303cc9c5 
