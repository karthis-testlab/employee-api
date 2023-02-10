Feature: Retriving the employees details from the employee api

    As a employee of the abc corp, I want to search and find my colleague information, 
    so that I can able connect with them

    Scenario: User able to get the information of all employees in the abc corp
    Given User is going to use the employee api endpoint url to fetch the information
    When If they hit or call the all information resource call using get method
    Then They should able to view all the record information in the abc crop employees database