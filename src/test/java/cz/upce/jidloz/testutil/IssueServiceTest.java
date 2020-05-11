package cz.upce.jidloz.testutil;


import cz.upce.jidloz.model.User;
import org.junit.Assert;
import org.junit.Test;
import org.junit.jupiter.api.Assertions;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class IssueServiceTest {
    /*
    @Autowired
    IssueService issueService;

    @Autowired
    IssueRepository issueRepository;*/

    @Autowired
    Creator creator;
    /*
    @Test
    public void testAdd() {
        IssueService issueService = new IssueService();
        issueService.add(new Issue());
        issueService.add(new Issue());
        List<Issue> result = issueService.findAll();
        Assert.assertEquals(2, result.size());
    }*/

    @Test
    public void testDeleteUsersIssues() {
        User assignee = (User) creator.saveEntity(new User());

        /*
        Issue issue1 = new Issue();
        issue1.setAssignee(assignee);
        Issue issue2 = new Issue();
        issue2.setAssignee(assignee);

        creator.saveEntities(issue1, issue2);

        Assertions.assertEquals(2, issueRepository.findAll().size());

        Long assigneeId = issue1.getAssignee().id;
        issueService.deleteUsersIssues(assigneeId);
        Assertions.assertEquals(0, issueRepository.findAll().size());*/
    }
}
