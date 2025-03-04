Feature: Open OrangeHRM End to End

Background: Open Website With Valid url
    Given Open Browser and Visit Website
    When Enter the user login with valid username & password
        | Username |  | Password |
        | Admin    |  | admin123 |
    Then Click The Login Button with Valid Username & Password

Scenario: Verify admin & find the admin name in admin panel
    When open admin panel
    Then Enter the admin name searching 
    Then Now search the admin
    Then Close the browser
