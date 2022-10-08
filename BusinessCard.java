package businessCard;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

/**
 * {@code BusinessCard} represented as a collection of entries, with
 * implementations of primary methods.
 *
 */
public class BusinessCard {

	/*
	 * Private members --------------------------------------------------------
	 */

	/**
	 * Connections established in {@code this} represented as the keys of other business cards.
	 */
	private Set<Integer> network;

	//basic type members
	private String name;
	private String company;
	private String position;
	private String email;
	private String linkedIn; //add other socials later
	private int phone;
	private int acctKey; //key to the account; used to access card info in database


	/**
	 * Creator of initial representation.
	 */
	private void createNewRep() {
		this.network = new HashSet<Integer>();
	}

	/*
	 * Constructor ------------------------------------------------------------
	 */

	/**
	 * No-argument constructor.
	 */
	public BusinessCard() {
		this.createNewRep();
	}

	/*
	 * Standard methods -------------------------------------------------------
	 */

	public final BusinessCard newInstance() {
		try {
			return this.getClass().getConstructor().newInstance();
		} catch (ReflectiveOperationException e) {
			throw new AssertionError(
					"Cannot construct object of type " + this.getClass());
		}
	}

	public final void clear() {
		this.createNewRep();
	}

	/*
	 * KERNEL METHODS
	 * Section I: Network methods ------------------------------------------------
	 */

	public final void connect(int x) {

		//adds x to the network set
		this.network.add(x);

	}

	public final void disconnect(int x) {

		//removes x from the network set
		this.network.remove(x);

	}

	public final boolean contains(int x) {

		//checks if x is in the network set, returns true or false
		return this.network.contains(x);

	}

	public final int size() {

		//calculates size of network by using the size method for HashSet
		//it stores the value in an integer and returns that value
		int length = this.network.size();

		return length;
	}

	public final Iterator<Integer> iterator() {
		return this.network.iterator();
	}

	/*
	 * Section II: Field setters and getters --------------------------------------
	 */

	public final void setName(String s) {

		this.name = s;

	}

	public final String getName() {

		return this.name;

	}

	public final void setCompany(String s) {

		this.company = s;

	}

	public final String getCompany() {

		return this.company;

	}

	public final void setPosition(String s) {

		this.position = s;

	}

	public final String getPosition() {

		return this.position;

	}

	public final void setEmail(String s) {

		this.email = s;

	}

	public final String getEmail() {

		return this.email;

	}

	public final void setLinkedIn(String s) {

		this.linkedIn = s;

	}

	public final String getLinkedIn() {

		return this.linkedIn;

	}

	public final void setPhone(int n) {

		this.phone = n;

	}

	public final int getPhone() {

		return this.phone;

	}

	public final void setAcctKey(int n) {

		this.acctKey = n;

	}

	public final int getAcctKey() {

		return this.acctKey;

	}

}
