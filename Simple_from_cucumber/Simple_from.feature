Feature: Simple Form Submission
  As a user, I want to fill out and submit the simple form.

  Scenario: Submit the form with valid details
    Given I navigate to the Simple Form page
    When I fill out the form with valid details
    Then I should see a confirmation message
