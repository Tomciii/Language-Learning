package com.backend.backend.infrastructure.entity;

import jakarta.persistence.*;

@Entity(name = "ART")
public class WordEntity {

    @Id()
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private int id;

    @Column(name ="WORD")
    private String word;

    @Column(name ="MEANING")
    private String meaning;

    @Column(name="TOPIC")
    private String topic;

    public WordEntity(String imageURL, String name, String text) {
        this.word = imageURL;
        this.meaning = name;
        this.topic = text;
    }

    public WordEntity() {

    }



    public String getWord() {
        return word;
    }

    public void setWord(String imageURL) {
        this.word = imageURL;
    }

    public String getMeaning() {
        return meaning;
    }

    public void setMeaning(String name) {
        this.meaning = name;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String text) {
        this.topic = text;
    }

    @Override
    public String toString() {
        return "WordEntity{" +
                "id=" + id +
                ", word='" + word + '\'' +
                ", meaning='" + meaning + '\'' +
                ", topic='" + topic + '\'' +
                '}';
    }
}
