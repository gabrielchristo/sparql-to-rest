#!/usr/bin/python
# -*- coding: utf-8 -*-

def lower(value: str) -> str:
	""" return lowered string """
	return value.lower()

def split_by_slash(value: str, index: int = 0) -> str:
	""" return desired value when using multiple route parameters """
	return value.split("/")[index]

# post process
def normalize(response):
	""" apply desired headers to response object """
	response[0][0] = 'name'
	response[0][1] = 'prize'
	response[0][2] = 'year'
	response[0][3] = 'image'
	response[0][4] = 'money'
	response[0][5] = 'motivation'
	return response, True # must return tuple of values for ramose

# pre process
def get_type(category: str) -> str:
	""" return mapping of wikidata type according to category """
	wikidata_types = {
		"all": "wd:Q7191",
		"physics": "wd:Q38104",
		"medicine": "wd:Q80061",
		"chemistry": "wd:Q44585",
		"peace": "wd:Q35637",
		"literature": "wd:Q37922",
		"economic_sciences":"wd:Q47170"
	}	
	return wikidata_types[split_by_slash(lower(category))], # must return tuple of values for ramose
