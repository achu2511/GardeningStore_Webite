package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Feedbackclass {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private int id;
private String name;
private String feedbacks;
private String email;
public Feedbackclass(int id,String email, String name, String feedbacks) {
	super();
	this.id = id;
	this.email=email;
	this.name = name;
	this.feedbacks = feedbacks;
}
public Feedbackclass() {
	super();
	// TODO Auto-generated constructor stub
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getFeedbacks() {
	return feedbacks;
}
public void setFeedbacks(String feedbacks) {
	this.feedbacks = feedbacks;
}

public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}

}
