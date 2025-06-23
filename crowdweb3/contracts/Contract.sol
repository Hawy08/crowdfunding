// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CrowdContract {
    struct Campaign{
        address owner;
        string title;
        string description;
        uint256 targetAmount;
        uint256 currentAmount;
        uint256 deadline;
        string imageUrl;
        address[] donators;
        uint256 totalDonations;
    }

    mapping(uint256 => Campaign) public campaigns;
    uint256 NumberOfCampaigns = 0;


    // function to create a new campaign

    function createCampaign(
        uint256 _id,
        string memory _title,
        string memory _description,
        uint256 _targetAmount,
        uint256 _deadline,
        string memory _imageUrl
    ) public {
        require(_targetAmount > 0, "Target amount must be greater than zero");
        require(_deadline > block.timestamp, "Deadline must be in the future");

        Campaign storage newCampaign = campaigns[_id]; 
        newCampaign.owner = msg.sender;
        newCampaign.title = _title;
        newCampaign.description = _description;
        newCampaign.targetAmount = _targetAmount;
        newCampaign.currentAmount = 0;
        newCampaign.deadline = _deadline;
        newCampaign.imageUrl = _imageUrl;
    }

    //function to donate to a campaign
    function donateToCampaign(uint256 _id) public payable {
        Campaign storage campaign = campaigns[_id];
        require(campaign.deadline > block.timestamp, "Campaign has ended");
        require(msg.value > 0, "Donation must be greater than zero");
        require(campaign.currentAmount + msg.value <= campaign.targetAmount, "Donation exceeds target amount");

        campaign.donators.push(msg.sender);
        campaign.currentAmount += msg.value;
        campaign.totalDonations += msg.value;
    }


    //function to get details of donators of a campaign and the donations as arrays
    function getDonators(uint256 _id) public view returns (address[] memory, uint256) {
        Campaign storage campaign = campaigns[_id];
        return (campaign.donators, campaign.totalDonations);
    }
    //function that returns an array of all campaigns and total number of campaigns


    function getAllCampaigns() public view returns (Campaign[] memory, uint256) {
        
        Campaign[] memory allCampaigns = new Campaign[](NumberOfCampaigns);
        uint256 index = 0;

        for (uint256 i = 0; i < NumberOfCampaigns; i++) {
            if (campaigns[i].owner != address(0)) {
                allCampaigns[index] = campaigns[i];
                index++;
            }
        }

        return (allCampaigns, NumberOfCampaigns);
    }

}