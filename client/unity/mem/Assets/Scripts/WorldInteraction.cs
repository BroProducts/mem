using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class WorldInteraction : MonoBehaviour {

	UnityEngine.AI.NavMeshAgent playerAgent;

	void GetInteraction() {
		Ray interactionRay = Camera.main.ScreenPointToRay(Input.mousePosition);
		RaycastHit interactionInfo;
		if (Physics.Raycast(interactionRay, out interactionInfo, Mathf.Infinity)) {
			GameObject interactionObject = interactionInfo.collider.gameObject;
			if(interactionObject.tag == "Interactable Object") {
				Debug.Log("Interactable interacted.");
			} else {
				playerAgent.destination = interactionInfo.point;
			}
		}
	}

	// Use this for initialization
	void Start () {
		playerAgent = GetComponent<UnityEngine.AI.NavMeshAgent>();
	}

	// Update is called once per frame
	void Update () {
		if (Input.GetMouseButtonDown(0) && !UnityEngine.EventSystems.EventSystem.current.IsPointerOverGameObject()) {
			GetInteraction();
		}
	}
}
