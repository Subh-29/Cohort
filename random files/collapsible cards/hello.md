# 📌 Machine Learning Formulas with Explanations

---

## 1. Mean (Average)
**Formula:**  
\[ \bar{x} = \frac{1}{n} \sum_{i=1}^{n} x_i \]  
**Explanation:** Sum of all values divided by the number of values. Used for central tendency.

---

## 2. Variance
**Formula:**  
\[ \sigma^2 = \frac{1}{n} \sum_{i=1}^{n} (x_i - \bar{x})^2 \]  
**Explanation:** Measures how much the data varies from the mean.

---

## 3. Standard Deviation
**Formula:**  
\[ \sigma = \sqrt{\sigma^2} \]  
**Explanation:** Square root of variance. Represents the spread of data.

---

## 4. Euclidean Distance
**Formula:**  
\[ d(p, q) = \sqrt{\sum_{i=1}^{n} (p_i - q_i)^2} \]  
**Explanation:** Commonly used to measure distance between two points in space.

---

## 5. Manhattan Distance
**Formula:**  
\[ d(p, q) = \sum_{i=1}^{n} |p_i - q_i| \]  
**Explanation:** Measures distance by summing absolute differences.

---

## 6. Mean Squared Error (MSE)
**Formula:**  
\[ MSE = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2 \]  
**Explanation:** Measures average squared difference between predicted and actual values. Used in regression.

---

## 7. Root Mean Squared Error (RMSE)
**Formula:**  
\[ RMSE = \sqrt{\frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2} \]  
**Explanation:** Square root of MSE. Gives error in original unit.

---

## 8. Mean Absolute Error (MAE)
**Formula:**  
\[ MAE = \frac{1}{n} \sum_{i=1}^{n} |y_i - \hat{y}_i| \]  
**Explanation:** Average of absolute differences. Less sensitive to outliers than MSE.

---

## 9. R-squared (Coefficient of Determination)
**Formula:**  
\[ R^2 = 1 - \frac{\sum_{i=1}^{n} (y_i - \hat{y}_i)^2}{\sum_{i=1}^{n} (y_i - \bar{y})^2} \]  
**Explanation:** Tells how well the model explains variance in data.

---

## 10. Gradient Descent Update Rule
**Formula:**  
\[ \theta = \theta - \alpha \nabla J(\theta) \]  
**Explanation:** Updates weights in the direction of the negative gradient of the loss.

---

## 11. Sigmoid Function
**Formula:**  
\[ \sigma(x) = \frac{1}{1 + e^{-x}} \]  
**Explanation:** Squeezes input to range (0, 1). Used in logistic regression.

---

## 12. Cross-Entropy Loss
**Formula:**  
\[ -\sum y \log(\hat{y}) \]  
**Explanation:** Loss for classification tasks. Measures difference between actual and predicted probabilities.

---

## 13. Softmax Function
**Formula:**  
\[ \text{Softmax}(z_i) = \frac{e^{z_i}}{\sum_{j=1}^{K} e^{z_j}} \]  
**Explanation:** Converts logits to probabilities in multi-class classification.

---

## 14. Entropy (Information Theory)
**Formula:**  
\[ H(X) = - \sum p(x) \log_2(p(x)) \]  
**Explanation:** Measures uncertainty or randomness in a dataset.

---

## 15. Bayes’ Theorem
**Formula:**  
\[ P(A|B) = \frac{P(B|A) P(A)}{P(B)} \]  
**Explanation:** Used in probabilistic models like Naive Bayes.

---

## 16. Gini Index (for Decision Trees)
**Formula:**  
\[ Gini = 1 - \sum p_i^2 \]  
**Explanation:** Measures impurity or disorder of a node.

---

## 17. Information Gain
**Formula:**  
\[ IG = H(parent) - \sum \frac{n_i}{n} H(i) \]  
**Explanation:** Reduction in entropy after a split. Used in decision trees.

---

## 18. K-Means Clustering Objective
**Formula:**  
\[ \sum_{i=1}^{k} \sum_{x \in C_i} ||x - \mu_i||^2 \]  
**Explanation:** Minimizes intra-cluster variance.

---

## 19. Cosine Similarity
**Formula:**  
\[ \cos(\theta) = \frac{A \cdot B}{\|A\| \|B\|} \]  
**Explanation:** Measures angle between two vectors. Used in text similarity.

---

## 20. TF-IDF (Term Frequency-Inverse Document Frequency)
**Formula:**  
\[ TFIDF = TF(t) \times IDF(t) \]  
\[ IDF(t) = \log\left(\frac{N}{df_t}\right) \]  
**Explanation:** Evaluates how important a word is in a document relative to the corpus.

