package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class FeedbackController {
	
	@Autowired
	FeedbackRepo repo;
	
	@GetMapping("/get")
	public List<Feedbackclass> get()
	{
		return repo.findAll();
	}
	
	@PostMapping("/post")
	public Feedbackclass Post(@RequestBody Feedbackclass m)
	{
		return repo.save(m);
	}
	
	@PostMapping("/send-data")
    public Feedbackclass sendData(@RequestBody Feedbackclass data) {
        // Process the received data here, e.g., save it to a database
        return repo.save(data);
    }

}
