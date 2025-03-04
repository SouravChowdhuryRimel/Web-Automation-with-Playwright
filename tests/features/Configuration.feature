Feature: Open OrangeHRM End to End

Background: Open Website With Valid url
     Given Open Browser and Visit Website
     When Enter the user login with valid username & password
         | Username |  | Password |
         | Admin    |  | admin123 |
      Then Click The Login Button with Valid Username & Password
Scenario:Verify The Configuration
      When open admin panel
      Then Go to configuration
      Then Click on email configuration
      Then Write the email name
      Then Setup the email configuration
      Then Close the browser

Scenario:Verify the Subscription
    When open admin panel
    Then Go to configuration for email subscription
    Then Click on email subscription
    Then Click on leave application
    Then Close the browser
    
Scenario:Verify the Module
    When open admin panel
    Then Go configuration for module
    Then Click on module
    Then Change mobile configuration
    Then Setup the Module
    Then Close the browser